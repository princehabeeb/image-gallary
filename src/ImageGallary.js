import React, { Component } from 'react'

export default class ImageGallary extends Component {
  
  render() {
    let imgGallary = [
        {
            src: './Images/img1.jpg',
            title: 'img1'
        },
        {
            src: './Images/img2.jpg',
            title: 'img2'
        },
        {
            src: './Images/img3.jpg',
            title: 'img3'
        },
        {
            src: './Images/img4.jpg',
            title: 'img4'
        },
        {
            src: './Images/img5.jpg',
            title: 'img5'
        },
        {
            src: './Images/img6.jpg',
            title: 'img6'
        }
    ];
    return (
      <div>
        <h1>Image Gallary</h1>
        <hr />
    </div>
    )
  }
}
