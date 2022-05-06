import React from 'react';

function Footer(props) {

    return(
<div className='Footer'>
<div className='contacts'>Contacts:</div>
<div className='number'>+7-701-667-78-53</div>
<div className='address'>   Address: {props.address}</div>
</div>
    );
}
export default Footer;