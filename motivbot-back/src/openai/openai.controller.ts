import { Controller, Get } from '@nestjs/common';
import { OpenaiService } from './openai.service';

@Controller('/motivbot')
export class OpenaiController {

    constructor(private openAiService: OpenaiService){}

    @Get('/free')
    getLettreMotivationFree(): string {
        return this.openAiService.getLettreMotivationFree();
    }

    @Get('/complete')
    getLettreMotivationComplete(): string {
        // TODO verifier personne connecté
        // TODO verifier le nombre de credit
        return this.openAiService.getLettreMotivationComplete();
    }
}
