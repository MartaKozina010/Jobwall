import { Stats } from "@kozina/shared-types"
import { Controller, Get } from "@nestjs/common"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"

import { StatsService } from "./stats.service"

@Controller("stats")
@ApiTags("Stats")
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get()
  @ApiOperation({ summary: "Return service stats." })
  @ApiResponse({
    status: 200,
    description: "Return service stats.",
  })
  async getStats(): Promise<Stats> {
    return this.statsService.getStats()
  }
}
