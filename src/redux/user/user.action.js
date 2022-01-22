import { userActiontypes } from "./user.types"

export const SetCurrentUser=user=> ({
    type:userActiontypes.SET_CURRENT_USER,
    payload:user
})