import { useState } from "react";
import { Link } from "react-router-dom";
import "./giftcardcss.css"

export default function GiftCardProcess() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

    function spendGiftCard() {
        setGiftCard(prevState => {
        return {
                ...prevState, 
                text: "Your coupon has been used.",
                valid: false,
                instructions:"Please visit our restaurant to renew your gift card.."
            }
        });
    }

    function reload(){
      window.location.reload()
    }

  return (
    <div style={{padding: '40px'}} className="gift-card-main-container">
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid ? (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        ) 
        : (
          <button onClick={reload}>
            <Link to="/gift">Back</Link>
          </button>
        )
      }
    </div>
  );
}
