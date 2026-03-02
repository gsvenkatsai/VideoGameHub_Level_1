//to get images in requird resolution
const getCroppedImageURL = (url:string) =>{
    if(!url) return "";
    const index = url.indexOf('media/') + 'media/'.length;
    // here we are making  urlupto media+ crop/600/400 + remaining url
    return url.slice(0,index) + 'crop/600/400' + url.slice(index);
}
export default getCroppedImageURL