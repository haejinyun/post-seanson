function downloadImage(imageUrl: RequestInfo | URL, fileName: string) {
  fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      // Blob 객체로부터 다운로드 링크 생성
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;

      // 다운로드 링크 클릭 및 객체 제거
      link.click();
      link.setAttribute('target', '_blank');

      URL.revokeObjectURL(link.href);
    });
}
export default downloadImage;
