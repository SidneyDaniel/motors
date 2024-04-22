export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: '../src/assets/projects/project1.svg',
                thumbnailImageSrc: '../src/assets/projects/project1.svg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '../src/assets/projects/project2.svg',
                thumbnailImageSrc: '../src/assets/projects/project2.svg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '../src/assets/projects/project3.svg',
                thumbnailImageSrc: '../src/assets/projects/project3.svg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '../src/assets/projects/project4.svg',
                thumbnailImageSrc: '../src/assets/projects/project4.svg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '../src/assets/projects/project5.svg',
                thumbnailImageSrc: '../src/assets/projects/project5.svg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '../src/assets/projects/project6.svg',
                thumbnailImageSrc: '../src/assets/projects/project6.svg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
           
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};