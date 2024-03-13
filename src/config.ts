import { registerAs } from '@nestjs/config'
export default registerAs('config', () => {
    return {
        database: {
            host: process.env.HOSTNAME,
            database: process.env.DATABASE,
            user: process.env.USERNAME_POSTGRES,
            pass: process.env.PASSWORD,
            port: parseInt(process.env.PORT),
        }
    }
})
