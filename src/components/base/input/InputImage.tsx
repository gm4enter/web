import React, { useEffect, useRef, useState } from 'react';
import closeBoldIcon from '../../../asset/images/iconCloseBold.png'
import addImage from '../../../asset/images/addImage.png'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        width: '100%',
        display: 'flex',
        gap: '12px',
        '&>img:nth-of-type(1)': {
            height: '36px',
            width: '36px',
            padding: '25px',
            border: '1.4px dashed #6D829A',
            borderRadius: '12px',
            cursor: 'pointer',
        },
        '&>div': {
            position: 'relative',
            height: '86px',
            width: '86px',
            '&>img:nth-of-type(1)': {
                height: '86px',
                width: '86px',
                borderRadius: '12px',
            },
            '&>img:nth-of-type(2)': {
                position: 'absolute',
                top: -10,
                right: -10,
                height: '16px',
                width: '16px',
                padding: '4px',
                backgroundColor: '#D5D5DE',
                borderRadius: '50%',
                cursor: 'pointer',
            },
        },
    }
})

interface Iprops {
    type?: string;
    onImageChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    containerStyle?: React.CSSProperties;
    listImages?: string[]
    onDelImage?: (images: string[]) => void

}

export const InputImage = (props: Iprops) => {
    const { type, containerStyle, listImages, onImageChange, onDelImage, ...restProps } = props;
    const classes = useStyles();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [images, setImages] = useState<string[]>([]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.files) {
            const newImages: string[] = [];
            for (let i = 0; i < event.target.files.length; i++) {
                newImages.push(URL.createObjectURL(event.target.files[i]));
            }
            setImages([...images, ...newImages]);
            onImageChange && onImageChange(event);
        }
    };

    const handleImageDelete = (image: string): void => {
        const newImages = images.filter((img) => img !== image);
        setImages(newImages);
        onDelImage && onDelImage(newImages);
    };

    const handleAddImageClick = (): void => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    useEffect(() => {
        if (listImages) {
            setImages(listImages)
        }
    }, [listImages])

    return (
        <div className={classes.container} style={containerStyle}>
            <img src={addImage} onClick={(images.length < 4) ? handleAddImageClick : () => { }} alt='' />
            <input hidden type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} {...restProps} />

            {images.map((image) => (
                <div key={image}>
                    <img src={image} alt="selected" />
                    <img src={closeBoldIcon} alt="close"
                        onClick={() => handleImageDelete(image)}
                    />
                </div>
            ))}
        </div>
    );
}

