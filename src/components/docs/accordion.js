import React from 'react';
import Playground from 'component-playground';

import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionContent,
  Row,
  Column,
} from 'react-foundation';

export const AccordionDocs = () => (
  <section className="label-docs">
    <Row>
      <Column large={12}>
        <div>
          <h3>Basics</h3>
          <Playground
            codeText={require('raw!../examples/accordion/basics')}
            scope={{
              React,
              Accordion,
              AccordionItem,
              AccordionTitle,
              AccordionContent
            }}
            theme="eiffel"/>
        </div>
      </Column>
    </Row>
  </section>
);

export default AccordionDocs;
