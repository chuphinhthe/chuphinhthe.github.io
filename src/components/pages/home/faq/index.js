import React from 'react';
import FaQItem from '../faqitem';
import './style.scss';

const FAQs = ({ fags }) => (
  <section className="home_faq">
    <div className="container">
      <h2 className="home_faq__title">Câu hỏi thường gặp</h2>
      <div className="home_faq__content">
        <div className="accordion" id="accordion__faq">
          {fags.edges.map(faq => (
            <FaQItem key={faq.node.id} title={faq.node.name}>
              {faq.node.des}
            </FaQItem>
          ))}
        </div>
      </div>
    </div>
    <svg
      className="home_faq__path home_faq__path__1"
      aria-hidden="true"
      width={300}
      height={270}
      title="icon__faq"
    >
      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__faq" />
    </svg>
  </section>
);

FAQs.defaultProps = {
  fags: {},
};

export default FAQs;
