export const PORT: number = Number(process.env.PORT) || 3000 
export const MONGOOSE_DB_PASSWORD: string = process.env.MONGOOSE_DB_PASSWORD
export const MONGOOSE_DB_URL: string = `mongodb+srv://db-admin:${MONGOOSE_DB_PASSWORD}@main-wqpfb.mongodb.net/test?retryWrites=true&w=majority`
