import { redis } from "../redis/client"


interface GetSubscriberInvitesCountParams {
    subscriberId: string
}

export async function getSubscriberInvitesCount({ subscriberId }: GetSubscriberInvitesCountParams) {

    const count = await redis.zscore('referral:acess-count', subscriberId)

    return {
        count: count ? Number.parseInt(count) : 0
    }
}