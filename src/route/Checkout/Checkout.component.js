import {Checkout as SourceCheckout} from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from '@scandipwa/scandipwa/src/component/ContentWrapper';
/** @namespace Component/Checkout/Component */
import './Checkout.override.style.scss';
export class Checkout extends SourceCheckout {
  constructor(props) {
    super(props);
  }
  render() {
    let displayed_keys=Object.values(this.stepMap);
    const step_keys=Object.keys(this.stepMap);
    const len = step_keys.length;
    displayed_keys.pop();
    const step = this.props.checkoutStep;
    let index=-1;
    step_keys.forEach((key,idx) => {
      if(key===step) {
        index = idx;
      }
    })
   
    return (
      <>
        <div className='bar stepper-wrapper'>
          {displayed_keys.map((key, idx)=>{ 
          return <div className='bar__item stepper-item completed'>
            <div className='bar__item__index'>    
              <div className='bar__item__index__number step-number'>
                {index <= idx ? idx + 1 : '✓'}
              </div>
            </div>
            <div className='bar__item__key step-name'>{key.title.value}</div>
          </div>
        })}</div> 
   
        <main block="Checkout">
            <ContentWrapper
              wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
              label={ __('Checkout page') }
              >
                { this.renderSummary(true) }
                <div block="Checkout" elem="Step">                  
                    { this.renderTitle() }
                    { this.renderGuestForm() }
                    { this.renderStep() }
                    { this.renderLoader() }
                </div>
                <div>
                    { this.renderSummary() }
                    { this.renderPromo() }
                    { this.renderCoupon() }
                </div>
            </ContentWrapper>
        </main>
      </>
  );
  }
}
export default Checkout;
//index <= idx ? idx + 1 : '✓'