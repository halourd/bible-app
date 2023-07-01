import axios from 'react-native-axios';
// import response from '../../config/response';

const get_latest_videos = async (API_KEY, CHANNEL_ID) => {
    console.log('API: ', API_KEY, 'CHANNEL: ', CHANNEL_ID)
    try{
        const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&order=date&type=video&key=${API_KEY}`
        )
        console.log('RESPONSE: ', response)

        // variable for LIVE API response
        let fetched_videos = response.data.items
        
        // let fetched_videos = response
        return fetched_videos   

    }catch(err){
        console.log('[ERROR]',err)
    }
}

export {get_latest_videos};
