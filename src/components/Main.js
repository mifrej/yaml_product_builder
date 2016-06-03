require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import { Row, Column } from 'react-foundation-components/lib/grid';
import { Button } from 'react-foundation-components/lib/button';
import { Tabs, Tab } from 'react-foundation-components/lib/tabs';
import {
  FormField,
  FormFieldInput,
  FormFieldLabel,
  FormFieldError,
  FormFieldHelp,
  FormFieldInline,
  FormFieldButton,
} from 'react-foundation-components/lib/forms';


class PageBox extends React.Component {
  state = {
    activeKey: '1'
  };

  handleSelect = (activeKey) => this.setState({ activeKey });

  render() {
    const { activeKey } = this.state;

    return (
      <Row>
        <Column medium={8} mediumCentered="centered">
          <Button>Add Page</Button>
          <Tabs activeKey={activeKey} onSelect={this.handleSelect}>
            <Tab eventKey="1" title="Page 1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Tab>
          </Tabs>
        </Column>

      </Row>
    );
  }

}

PageBox.defaultProps = {
};

export default PageBox;
