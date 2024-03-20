import { Global, Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

@Global()
@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: 'sandbox.smtp.mailtrap.io', // Configura el servidor SMTP de Gmail
                port: 465,
                secure: false,
                auth: {
                    user: '06f9033eba05d6', // Tu dirección de correo de Gmail
                    pass: '8793a569a7dc98', // Tu contraseña de Gmail
                },
            },
            defaults: {
                from: '"No Reply" <crus30627@gmail.com>', // Dirección de correo predeterminada
            },
            template: {
                dir: join(__dirname, 'templates'), // Ruta a tus plantillas de correo
                adapter: new HandlebarsAdapter(), // Usa Handlebars como motor de plantillas
                options: {
                    strict: true,
                },
            },
        }),
    ]
})
export class MailModule {

}
