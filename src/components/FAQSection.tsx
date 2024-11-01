import { Topics } from "./shared/routes";

export const FAQSection = () => {
  const faqs = [
    {
      q: "What are the login hours?",
      a: "It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum vitae fugit laboriosam dolor distinctio.",
    },
    {
      q: "What do i get my refund?",
      a: "It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum vitae fugit laboriosam dolor distinctio. Lorem ipsum dolor sit amet.",
    },
    {
      q: "How Long It Will Take Food To Arrive?",
      a: "It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum vitae fugit laboriosam dolor distinctio.",
    },
    {
      q: "Does Your Restaurant Has Both Veg And Non Veg?",
      a: "It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum vitae fugit laboriosam dolor distinctio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, distinctio?",
    },
    {
      q: "What Is Cost Of Food Delivery?",
      a: "It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum vitae fugit laboriosam dolor distinctio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam officiis ducimus, cum enim repudiandae animi.",
    },
    {
      q: "Who Is Eligible For Pro Membership?",
      a: "It is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsum vitae fugit laboriosam dolor distinctio.",
    },
  ];

  return (
    <section id="faq" className="all-sections bg-[url(/assets/images/faq-bg.png)]">
      <Topics
        secName="faqs"
        title={
          <>
            Frequently <br /> Asked Questions
          </>
        }
      />

      {/* Container */}
      <div className="container columns-1 lg:columns-2 xl:columns-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[linear-gradient(145deg,_#e4e4e4,_#ffffff)] break-inside-avoid border border-solid border-[#bfbfbf] rounded-[30px] mb-4"
          >
            <h4 className="text-xl font-semibold capitalize border-b border-solid border-[#bfbfbf] px-8 py-4">
              {faq.q}
            </h4>
            <p className="text-primary-200 px-8 py-2">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
