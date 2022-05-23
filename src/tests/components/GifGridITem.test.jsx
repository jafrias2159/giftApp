import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";
import React from "react";

describe("Tests on GifGridItem", () => {
  const title = "saitama";
  const url = "japan.anime/";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Should render a gifGridItem", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should render a p element", () => {
    const pElement = wrapper.find("p");
    expect(pElement.text().trim()).toBe(title);
  });

  test("should render an img with a src and alt props", () => {
    const imgElement = wrapper.find("img");

    expect(imgElement.prop("src")).toBe(url);
  });

  test('the main container must have the "animate__fadeIn" class', () => {
    const divElement =  wrapper.find("div");
    const animateClass = "animate__fadeIn";
    expect(divElement.prop('className')).toContain(animateClass);
  });
});
