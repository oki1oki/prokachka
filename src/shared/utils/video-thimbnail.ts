export const getVideoThumbnail = (videoUrl: string): Promise<string> => {
	return new Promise((resolve) => {
		const video = document.createElement('video');
		video.src = videoUrl;
		video.crossOrigin = 'anonymous';
		video.addEventListener('loadedmetadata', () => {
			video.currentTime = 1000;
		});
		video.addEventListener('seeked', () => {
			const canvas = document.createElement('canvas');
			canvas.width = video.videoWidth;
			canvas.height = video.videoHeight;
			const context = canvas.getContext('2d');
			context?.drawImage(video, 0, 0, canvas.width, canvas.height);
			const dataUrl = canvas.toDataURL('image/png');
			resolve(dataUrl);
		});
	});
};
