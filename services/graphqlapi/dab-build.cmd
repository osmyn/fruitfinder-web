@echo off
@echo This cmd file creates a Data API Builder configuration based on the chosen database objects.
@echo To run the cmd, create an .env file with the following contents:
@echo dab-connection-string=your connection string
@echo ** Make sure to exclude the .env file from source control **
@echo **
dotnet tool install -g Microsoft.DataApiBuilder
dab init -c dab-config.json --database-type mssql --connection-string "@env('dab-connection-string')" --host-mode Development
@echo Adding tables
dab add "Account" --source "[dbo].[Accounts]" --fields.include "Id,CompoundId,UserId,ProviderType,ProviderId,ProviderAccountId,RefreshToken,AccessToken,AccessTokenExpires,CreatedAt,UpdatedAt" --permissions "anonymous:*" 
dab add "AuditLog" --source "[dbo].[AuditLogs]" --fields.include "Id,IPAddress,Session,Type,Endpoint,Identifier,Message,ErrorMessage,ErrorStack,Request,Response,AdditionalInfo,CreatedAt,UpdatedAt" --permissions "anonymous:*" 
dab add "Fruit" --source "[dbo].[Fruits]" --fields.include "Id,PLU,Category,Commodity,Variety,Size,BotanicalName,CreatedAt,UpdatedAt" --permissions "anonymous:*" 
dab add "ReviewInteraction" --source "[dbo].[ReviewInteractions]" --fields.include "Id,UserId,ReviewId,Vote,Response,CreatedAt,UpdatedAt" --permissions "anonymous:*" 
dab add "Review" --source "[dbo].[Reviews]" --fields.include "Id,UserId,FruitId,Rating,ImageUrl,ImageStatus,ImageRejectedReason,Provenance,Price,Description,LocationName,LocationZip,CreatedAt,UpdatedAt" --permissions "anonymous:*" 
dab add "User" --source "[dbo].[Users]" --fields.include "Id,Name,Email,ImageUrl,Zipcode,CreatedAt,UpdatedAt,Oid" --permissions "anonymous:*" 
@echo Adding views and tables without primary key
@echo Adding relationships
dab update ReviewInteraction --relationship Review --target.entity Review --cardinality one
dab update Review --relationship ReviewInteraction --target.entity ReviewInteraction --cardinality many
dab update ReviewInteraction --relationship User --target.entity User --cardinality one
dab update User --relationship ReviewInteraction --target.entity ReviewInteraction --cardinality many
dab update Review --relationship Fruit --target.entity Fruit --cardinality one
dab update Fruit --relationship Review --target.entity Review --cardinality many
dab update Review --relationship User --target.entity User --cardinality one
dab update User --relationship Review --target.entity Review --cardinality many
@echo Adding stored procedures
@echo **
@echo ** run 'dab validate' to validate your configuration **
@echo ** run 'dab start' to start the development API host **
