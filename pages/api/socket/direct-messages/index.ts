import { currentProfilePages } from "@/lib/current-profile-pages";
import { NextApiResponseServerIo } from "@/types";
import { NextApiRequest } from "next";

import { db } from "@/lib/db";
export default async function handler(req:NextApiRequest, res:NextApiResponseServerIo) {
 if(req.method === "POSt"){
    return res.status(405).json({error:"Method not allowed"});
 }
 try {
    const profile = await currentProfilePages(req);
    const {content,fileUrl} = req.body;
    const {conversationId} = req.query;
    if(!profile){
        return res.status(401).json({error:"Unauthorized"});
    }
    if(!conversationId){
        return res.status(400).json({error:"serverID is required"});
    }
   
    if(!content){
        return res.status(400).json({error:"Content or fileUrl is required"});
    }
  
    const conversation = await db.conversation.findFirst({
        where:{
            id:conversationId as string,
            OR:[
                {
                    memberOne:{
                        profileId:profile.id
                    }
                },
                {
                    memberTwo:{
                        profileId:profile.id
                    }
                }
            ]      
        },
        include:{
            memberOne:{
                include:{
                    profile:true
                }
            },
            memberTwo:{
                include:{
                    profile:true
                }
            }
        }
    });

    if(!conversation){
        return res.status(404).json({error:"Conversation not found"});
    }4
    const member = conversation.memberOne.profileId === profile.id ? conversation.memberOne : conversation.memberTwo;

    
    if(!member){
        return res.status(403).json({error:"Forbidden"});
    }
    const message = await db.directMessage.create({
        data:{
            content,
            fileUrl,
            conversationId:conversation.id as string,
            memberId:member.id
        },
        include:{
            member:{
                include:{
                    profile:true
                }
            }
        }
    });

    const channelKey = `chat:${conversationId}:messages`;
    res?.socket?.server?.io?.emit(channelKey, message);
    return res.status(200).json({message});
 } catch (error) {
    console.log("DIRECT_MESSAGE",error);
    return res.status(500).json({error:"Something went wrong"});
 }
}