import { ICommentDocument } from "@/models/Comment";
import { IUser, IUserDocument } from "@/models/User";
import { IPostDocument } from "@/models/Post";
import { IMessage } from "@/models/Message";

type PopulatedUser = Pick<IUserDocument, "_id" | "name" | "username" | "image">;

type PopulatedComment = Omit<ICommentDocument, "user"> & {
    user: PopulatedUser;
};
type PopulatedPost = Omit<IPostDocument, "user"> & {
    user: PopulatedUser;
};

function sanitizeUser(user: IUserDocument, role: IUser['role'] = 'user') {
    const baseUser = {
        _id: user._id,
        username: user.username,
        role: user.role,
        name: user.name,
        bio: user.bio,
        gender: user.gender,
        image: user.image,
        cover: user.cover,
        links: user.links,
        accountType: user.accountType,
        messageFrom: user.messageFrom,
        onlineStatus: user.onlineStatus,
        created_at: user.created_at,
        updated_at: user.updated_at,
        followersCount: user.followers?.length || 0,
        followingCount: user.following?.length || 0,
    };

    if (role === 'admin' || role === 'super-admin') {
        return {
            ...baseUser,
            email: user.email,
            blocked: user.blocked,
            deleted: user.deleted,
            otp: user.otp,
        };
    }

    return baseUser;
}

function sanitizePost(post: PopulatedPost) {
    return {
        _id: post._id.toString(),
        content: post.content,
        image: post.image,
        hashtags: Array.isArray(post.hashtags) ? post.hashtags.join(", ") : "",
        likes_count: post.likes?.length || 0,
        comments_count: post.comments?.length || 0,
        share_count: post.share_count ?? 0,
        views: post.views ?? 0,
        created_at: post.created_at,
        updated_at: post.updated_at,
        user: {
            _id: post.user._id.toString(),
            name: post.user.name,
            username: post.user.username,
            image: post.user.image,
        },
    };
}

function sanitizeComment(comment: PopulatedComment & { user: PopulatedUser }) {
    return {
        _id: comment._id.toString(),
        comment: comment.text,
        post: comment.post.toString(),
        user: {
            _id: comment.user._id.toString(),
            name: comment.user.name,
            username: comment.user.username,
            image: comment.user.image,
        },
        created_at: comment.created_at,
        updated_at: comment.updated_at,
    };
}

function sanitizeMessage(msg: IMessage) {
    return {
        _id: msg._id,
        sender: msg.sender,
        text: msg.deleted ? "This message was deleted." : msg.text,
        deleted: msg.deleted ?? false,
        created_at: msg.created_at,
        updated_at: msg.updated_at
    };
}

export { sanitizeUser, sanitizePost, sanitizeComment, sanitizeMessage };