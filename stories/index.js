import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Landing from '../src/Components/Landing';
import Table from '../src/Components/Table';
import { tableColumns, tableData } from '../src/Services/Constants';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Landing', module)
  .add('Landing Page Component', () => <Landing />);

  storiesOf('Table', module)
  .add('Table Component', () => <Table data={tableData} columns={tableColumns} />)