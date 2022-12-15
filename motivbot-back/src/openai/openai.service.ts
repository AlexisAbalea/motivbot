import { Injectable } from '@nestjs/common';

@Injectable()
export class OpenaiService {

    getLettreMotivationFree(): string {
        return 'Madame, Monsieur, je vous presente ma lettre de motivation ...';
    }

    getLettreMotivationComplete(): string  {
        return `Madame, Monsieur, 
        je vous presente ma lettre de motivation qui me permettera de devenir quelqu'un de trop fort 
        car j'aime la vie et les oiseaux et les bébés qui pleurent. Cordialement`;
    }
}
