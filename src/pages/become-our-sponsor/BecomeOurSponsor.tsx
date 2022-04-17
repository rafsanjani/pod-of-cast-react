import "./BecomeOurSponsor.css";

type Membership = {
  price: number;
  category: string;
  description: string;
  tier: number;
  perks: string[];
};

const memberships: Membership[] = [
  {
    price: 9.99,
    category: "Member",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quibusdam",
    tier: 1,
    perks: [
      "Exclusive content",
      "5% Discount on Merch",
      "Join the Community",
      "Livestreaming Access",
    ],
  },
  {
    price: 14.99,
    category: "Family",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quibusdam",
    tier: 2,
    perks: [
      "Everything in Tier-1",
      "Free tickets to events",
      "Unlimited edition merch",
      "Promote your product",
      "Request topic",
    ],
  },
  {
    price: 29.99,
    category: "Official",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, quibusdam",
    tier: 3,
    perks: [
      "Everything in Tier-2",
      "Exclusive badge on livestreaming",
      "Become an official sponsor",
      "Early access to all episodes",
      "Free stickers and merch",
    ],
  },
];

export function BecomeOurSponsor() {
  return (
    <section className="become-our-sponsor">
      <h1 className="font-bold lg:text-6xl md:text-4xl sm:text-4xl">
        Become our sponsor
      </h1>
      <h3 className="subtitle">Get exclusive episodes merch and more</h3>
      <div className="pricing-grid">
        {memberships.map((membership) => {
          return (
            <div
              className={
                membership.tier === 2 ? "pricing-card family" : "pricing-card"
              }
              key={membership.category}
            >
              <h1 className="font-bold text-2xl lg:text-4xl">
                {membership.category}
              </h1>
              <p>{membership.description}</p>
              <div>
                <button className="button filled-button subscribe-button">
                  Subscribe
                </button>
                <div className="tracking-tighter price">
                  <span className="font-bold lg:text-2xl text-red-800">
                    ${membership.price}
                  </span>
                  <br />
                  /month
                </div>
              </div>
            </div>
          );
        })}

        {memberships.map((membership) => {
          return (
            <div
              className={
                membership.tier === 2
                  ? "whats-included family"
                  : "whats-included"
              }
              key={membership.category}
            >
              <h3 className="font-bold text-2xl">Whats included</h3>
              <ul>
                {membership.perks.map((perk, index) => {
                  return (
                    <li
                      className={
                        index === 0 && membership.tier > 1 ? "font-bold" : ""
                      }
                      key={perk}
                    >
                      {perk}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
