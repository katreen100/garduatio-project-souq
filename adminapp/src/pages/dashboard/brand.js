import { getAllBrandNames } from '../../network/apis/brand';

const BrandSectionPage = () => {
    getAllBrandNames();
    return (
        <>
        <h1>Brand Section</h1>
        </>
    )
}

export default BrandSectionPage;