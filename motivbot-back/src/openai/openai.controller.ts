import { Controller, Get, Param } from '@nestjs/common';
import { OpenaiService } from './openai.service';

@Controller('/motivbot')
export class OpenaiController {

    constructor(private openAiService: OpenaiService){}

    @Get('/free')
    getLettreMotivationFree(): string {
        return this.openAiService.getLettreMotivationFree();
    }

    @Get('/complete/:id')
    async getLettreMotivationComplete(@Param('id') id: string): Promise<string> {
        console.log(id);
        return await this.openAiService.getLettreMotivationComplete(+id);
    }
}
