//to get images in requird resolution
import noImage from '../assets/NoImage.jpg'
const getCroppedImageURL = (url:string) =>{
    if (!url || url.trim() === '') return noImage;
    const index = url.indexOf('media/') + 'media/'.length;
    // here we are making  urlupto media+ crop/600/400 + remaining url
    return url.slice(0,index) + 'crop/600/400' + url.slice(index);
}
export default getCroppedImageURL