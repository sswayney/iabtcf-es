import {expect} from 'chai';
import {
  PublisherFieldSequence,
  PublisherTCEncoder,
} from '../../src/encoder';
import {
  TCModel,
  GVL,
} from '../../src';

export function run(): void {

  describe('PublisherTCEncoder', (): void => {

    // eslint-disable-next-line
    const vendorlistJson = require('../../../../dev/vendor-list.json');
    const gvl: GVL = new GVL(vendorlistJson);

    it('should encode into a string', (done: () => void): void => {

      const tcModel: TCModel = new TCModel(gvl);
      let encoded = '';

      tcModel.cmpId = 23;
      tcModel.cmpVersion = 1;

      // full consent!
      tcModel.setAll();

      const encodeIt = (): void => {

        encoded = PublisherTCEncoder.encode(tcModel);

      };

      expect(tcModel.gvl).to.equal(gvl);
      tcModel.gvl.readyPromise.then((): void => {

        expect(tcModel.isValid(), 'input model is valid').to.be.true;

        expect(encodeIt, 'encode should not throw an error').not.to.throw();
        expect(encoded, 'shold not be empty').to.not.equal('');

        done();

      });

    });

    it('TCModel->String->TCModel and should be equal', (done: () => void): void => {

      const tcModel: TCModel = new TCModel(gvl);
      const decodedModel: TCModel = new TCModel();
      let encoded = '';

      tcModel.cmpId = 23;
      tcModel.cmpVersion = 1;

      // full consent!
      tcModel.setAll();

      const encodeIt = (): void => {

        encoded = PublisherTCEncoder.encode(tcModel);

      };

      const decodeIt = (): TCModel => {

        return PublisherTCEncoder.decode(encoded, decodedModel);

      };

      expect(tcModel.gvl).to.equal(gvl);
      tcModel.gvl.readyPromise.then((): void => {

        expect(tcModel.isValid(), 'input model is valid').to.be.true;

        expect(encodeIt).not.to.throw();
        expect(decodeIt).not.to.throw();

        encodeIt();

        const publisherFieldSequence: PublisherFieldSequence = new PublisherFieldSequence();

        publisherFieldSequence['2'].forEach((key: string): void => {

          // the same in every way :-)
          // except dates
          switch (key) {

            case 'lastUpdated':
            case 'created':

              // should round of the last two digits
              expect(decodedModel[key].getTime(), `${key} should be equal`)
                .to.equal(Math.round(tcModel[key].getTime()/100)*100);
              break;
            case 'publisherRestrictions':
              // do nothing
              break;
            default:
              expect(decodedModel[key], `${key} should be equal`).to.deep.equal(tcModel[key]);

          }

        });

        done();

      });

    });

  });

}
