# this line is important so that backend connection is extablished in the pipeline
terraform {
    backend "azurerm" {}
}



module "infrasructure" {
  source = "./packages/terraform"

  # inputs (required input variable in VPC module)
}