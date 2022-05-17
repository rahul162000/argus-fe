import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPal = ({ course, price, setShowAlert, buyCourse }) => {
  return (
    <>
      <PayPalScriptProvider
        options={{
          'client-id':
            'AbBynRz6SMwaxhoUdaEBIvQ66YpVzTY9Lo8YxG018AcBwC1iZVKBEZxPYTSHFY-YJ9FevrckavpOShkT',
          currency: 'CAD',
        }}
      >
        <PayPalButtons
          forceReRender={[price]}
          style={{ layout: 'vertical' }}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order.create({
              intent: 'CAPTURE',
              purchase_units: [
                {
                  description: course?.name,
                  amount: {
                    currency_code: 'CAD',
                    value: price,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            await actions.order.capture().then((order) => {
              setShowAlert({
                show: true,
                message: 'Payment successfully!!!',
                success: true,
              });
              buyCourse(order);
            });
          }}
          onError={(err) => {
            setShowAlert({
              show: true,
              message: 'Error purchasing course try again',
              success: false,
            });
          }}
        />
      </PayPalScriptProvider>
    </>
  );
};

export default PayPal;

// <<div ref={paypal}></div>
