import noImage from '../assets/no-image-placeholder.webp';
/**
 * Function that returns the URL of an image cropped to a specific size.
 * @param url - The original URL of the image.
 * @returns The URL of the cropped image.
 */
const getCroppedImageUrl = (url: string) => {
	if (!url) return noImage;
	// Find the index of the "media/" substring in the URL.
	const target = 'media/';
	// Find the index of the starting point of the media link and add the target length
	const index = url.indexOf(target) + target.length;
	// Return the cropped URL by adding "crop" followed by specified dimensions and then the remaining part from original URL
	return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};
export default getCroppedImageUrl;
