import { fetchRedis } from "./redis"

export const getFriendsByUserId = async ( userId:string | User)=>{
//retrieve friends for current user
const friendIds = await fetchRedis("smembers",`user:${userId}:friends`) as string[]

const friends = await Promise.all(
    friendIds.map(async(friendId)=>{
        const friend = await fetchRedis('get',`user:${friendId}`) as string
        const friendPersed = JSON.parse(friend) as User
        return friendPersed 
    })
)
return friends

}