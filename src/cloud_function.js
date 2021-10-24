import axios from "axios"
export const sendCloudMessage = (data) => axios({
    method: 'post',
    url: '/api/sendNotification',
    data: {
        data: {
            "type": "",
            "click_action": "FLUTTER_NOTIFICATION_CLICK",
            ...data
        }
    }
})