import React from 'react';
import { render } from '@testing-library/react';
import { SiteData } from '../../types/siteMetadata';
import { mockStaticData } from '../../../test/test-utils';

import Layout from './Layout';

const mockContentData = { home: { title: '' } };

describe('Layout', () => {
  it('renders a header', () => {
    mockStaticData<SiteData>({
      site: {
        siteMetadata: {
          title: 'Dashboard',
        },
      },
    });

    const { container } = render(
      <Layout content={mockContentData}>
        <p>children text</p>
      </Layout>,
    );

    expect(container.querySelector(`header`)).toBeInTheDocument();
  });

  it(`renders children`, () => {
    const text = `__Hello world__`;
    mockStaticData<SiteData>({
      site: {
        siteMetadata: {
          title: 'Dashboard',
        },
      },
    });

    const { getByText } = render(
      <Layout content={mockContentData}>
        <p>{text}</p>
      </Layout>,
    );

    const child = getByText(text);

    expect(child).toBeInTheDocument();
  });
});
