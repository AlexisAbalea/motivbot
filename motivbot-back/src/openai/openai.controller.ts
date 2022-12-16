import { Controller, Get, Param } from '@nestjs/common';
import { OpenaiService } from './openai.service';

@Controller('/motivbot')
export class OpenaiController {

    constructor(private openAiService: OpenaiService){}

    @Get('/free')
    getLettreMotivationFree(): string {
        return this.openAiService.getLettreMotivationFree();
    }

    @Get('/complete')
    async getLettreMotivationComplete(@Param('id') id: number): Promise<string> {
        return await this.openAiService.getLettreMotivationComplete(id);
    }
}
