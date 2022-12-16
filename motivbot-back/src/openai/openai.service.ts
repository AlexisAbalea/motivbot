import { Inject, Injectable } from '@nestjs/common';
import { Lettre } from 'src/entities/lettre.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class OpenaiService {

    constructor(
        @Inject('LETTRE_REPOSITORY')
        private lettreRepository: Repository<Lettre>,
        private userService: UsersService
      ) {}

    getLettreMotivationFree(): string {
        return 'Madame, Monsieur, je vous presente ma lettre de motivation ...';
    }

    async getLettreMotivationComplete(idUser: number): Promise<string>  {
        const user = await this.userService.findOne(idUser);
        
        if (!user) {
            throw Error('Utilisateur inconnu');
        }
        if (user.credit < 1) {
            throw Error('Pas de credit');
        }
        let resultat;
        try {
            resultat = await this.callOpenAiMaxToken();
        } catch (error) {
            throw Error('Erreur API' + error);
        }
        const lettre: Lettre = new Lettre();
        lettre.contenu = resultat;
        lettre.user = user;
        this.lettreRepository.save(lettre);
        return resultat;
    }

    async callOpenAiMaxToken() {
        return `Madame, Monsieur, 
        je vous presente ma lettre de motivation qui me permettera de devenir quelqu'un de trop fort 
        car j'aime la vie et les oiseaux et les bébés qui pleurent. Cordialement`;
    }
}
