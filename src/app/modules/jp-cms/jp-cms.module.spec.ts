import { JpCmsModule } from './jp-cms.module';

describe('JpCmsModule', () => {
  let jpCmsModule: JpCmsModule;

  beforeEach(() => {
    jpCmsModule = new JpCmsModule();
  });

  it('should create an instance', () => {
    expect(jpCmsModule).toBeTruthy();
  });
});
