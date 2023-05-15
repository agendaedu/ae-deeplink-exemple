import React from "react";
import { create, act, ReactTestRenderer } from "react-test-renderer";

import { FlatlistBlur } from "../index";

let wrapper: ReactTestRenderer;
let props: object;

const createTestPropsWithNavigation = (ownProps: object): object => ({
  navigation: {
    navigate: jest.fn(),
    push: jest.fn(),
    goBack: jest.fn(),
    popToTop: jest.fn(),
    setParams: jest.fn(),
  },
  route: {
    params: {
      ...ownProps,
    },
  },
});

describe("ActivitiesPending screen test suite", () => {
  beforeEach(() => {
    props = createTestPropsWithNavigation({});

    act(() => {
      wrapper = create(<FlatlistBlur {...props} />);
    });
  });

  it("should render without explode", () => {
    expect(wrapper).toBeTruthy();
  });
});
