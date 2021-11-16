import { prismaClient } from "../prisma";

class GetLast5MessagesService {
    async execute() {
       const messages = await prismaClient.message.findMany({
           take: 5,
           orderBy: {
               created_at: "desc"
           },
           include: {
               user: true
           }
       });

       // SELECT * FROM MESSAGES LIMIT 3 ORDER BY CREATED_AT DESC

       return messages;
    }
}

export { GetLast5MessagesService };  