//to get images in required resolution
import noImage from '../assets/NoImage.jpg'
const getCroppedImageURL = (url:string) =>{
    if (!url || url.trim() === '') return noImage;
    if (url.includes('crop/')) return url;
    const target = 'media/';
    const index = url.indexOf(target);
    if (index === -1) return url;
    const insertIndex = index + target.length;
    return url.slice(0, insertIndex) + 'crop/600/400/' + url.slice(insertIndex);
}
export default getCroppedImageURL