import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'SpfxRouterTestWebPartStrings';
import SpfxRouterTest from './components/SpfxRouterTest';
import { ISpfxRouterTestProps } from './components/ISpfxRouterTestProps';

export interface ISpfxRouterTestWebPartProps {
  description: string;
}

export default class SpfxRouterTestWebPart extends BaseClientSideWebPart<ISpfxRouterTestWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxRouterTestProps > = React.createElement(
      SpfxRouterTest,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
