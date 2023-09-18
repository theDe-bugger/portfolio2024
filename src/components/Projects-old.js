import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';
         
function Projects() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={3000} itemTemplate={productTemplate} />
        </div>
    )
    // return ( 
            
    //     <div className='App-header'>
    //     <main>
    //         <h1>
    //             Here are some of my projects!
    //         </h1>
    //         <Stack direction="row" spacing={1}>
    //             <IconButton aria-label="mail" color = "primary" size = "large" href="mailto:jaimil.dalwadi@uwaterloo.ca" target="_blank">
    //                 <EmailIcon />
    //             </IconButton>

    //             <IconButton aria-label="call" color = "primary" size = "large" href="tel:+16479820821" target="_blank">
    //                 <PhoneIcon />
    //             </IconButton>

    //             <IconButton aria-label="github" color = "primary" size = "large" href="https://github.com/theDe-bugger/" target="_blank">
    //                 <GitHubIcon />
    //             </IconButton>

    //             <IconButton aria-label="linkedin" color = "primary" size = "large" href="https://linkedin.com/in/jaimil-dalwadi" target="_blank">
    //                 <LinkedInIcon />
    //             </IconButton>
                
    //         </Stack>
    //     </main>
    //     </div>    
    // );
}

export default Projects;