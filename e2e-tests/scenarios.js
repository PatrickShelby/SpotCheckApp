'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('SpotCheck App', function() {


  // it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
  //   browser.get('app/index.html');
  //   expect(browser.getLocationAbsUrl()).toMatch("/view1");
  // });

  describe('Spot View', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });
    var spotList = element.all(by.repeater('spot in spots'));
    var query = element(by.model('query'));


    it('should filter the spot list', function() {


      expect(spotList.count()).toBe(3);

      query.sendKeys('Pacifica');
      expect(spotList.count()).toBe(1);

    });

    it('should display the spot name at the top of the page', function(){
      query.clear();
      expect(browser.getTitle()).toMatch('Spot Check');
      query.sendKeys('Pacifica');
      expect(browser.getTitle()).toMatch('Spot Check: Pacifica')
    });
  });
});
