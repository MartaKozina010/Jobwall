import { IUpdateJobOffer } from "@kozina/shared-types"
import { PartialType } from "@nestjs/mapped-types"

import { CreateJobOfferDto } from "./create-job-offer.dto"

export class UpdateJobOfferDto extends PartialType(CreateJobOfferDto) implements IUpdateJobOffer {}
