describe("githubHacks module", function() {

  beforeEach(module('githubHacks'));

  describe('addFlashMessages', function() {
  
    describe('pullsList directive', function() {

      it('adds flash-messages and credentials-form to its children', inject(function($compile, $rootScope) {
        var element = $compile('<div class="pulls-list"></div>')($rootScope);
        expect(element.children().length).toEqual(2);
        expect(element.children().eq(0).hasClass('flash')).toBeTruthy();
        expect(element.children().eq(1).hasClass('flash-messages')).toBeTruthy();
      }));
    });


    describe('viewPullRequest directive', function() {

      it('adds flash-messages and credentials-form to its children', inject(function($compile, $rootScope) {
        var element = $compile('<div class="view-pull-request"></div>')($rootScope);
        expect(element.children().length).toEqual(2);
        expect(element.children().eq(0).hasClass('flash')).toBeTruthy();
        expect(element.children().eq(1).hasClass('flash-messages')).toBeTruthy();
      }));
    });

  });

  describe('terminateCompilation', function() {

    describe('discussionTimeline directive', function() {

      it('should not compile the contents and add a class', inject(function($compile, $rootScope) {
        var element = $compile ('<div class="discussionTimeline">{{1 + 2}}</div>')($rootScope);
        $rootScope.$digest();
        expect(element.text()).toEqual('{{1 + 2}}');
        expect(element.hasClass('ng-terminated')).toBeTruthy();
      }));
    });

    describe('diffView directive', function() {

      it('should not compile the contents and add a class', inject(function($compile, $rootScope) {
        var element = $compile ('<div class="diffView">{{1 + 2}}</div>')($rootScope);
        $rootScope.$digest();
        expect(element.text()).toEqual('{{1 + 2}}');
        expect(element.hasClass('ng-terminated')).toBeTruthy();
      }));
    });

    describe('commit directive', function() {

      it('should not compile the contents and add a class', inject(function($compile, $rootScope) {
        var element = $compile ('<div class="commit">{{1 + 2}}</div>')($rootScope);
        $rootScope.$digest();
        expect(element.text()).toEqual('{{1 + 2}}');
        expect(element.hasClass('ng-terminated')).toBeTruthy();
      }));
    });

    describe('title directive', function() {

      it('should not compile the contents of the title element and add a class', inject(function($compile, $rootScope) {
        var element = $compile ('<title>{{1 + 2}}</title>')($rootScope);
        $rootScope.$digest();
        expect(element.text()).toEqual('{{1 + 2}}');
        expect(element.hasClass('ng-terminated')).toBeTruthy();
      }));
    });

    describe('listGroupItemName directive', function() {

      it('should not compile the contents of the title element and add a class', inject(function($compile, $rootScope) {
        var element = $compile ('<div class="list-group-item-name">{{1 + 2}}</div>')($rootScope);
        $rootScope.$digest();
        expect(element.text()).toEqual('{{1 + 2}}');
        expect(element.hasClass('ng-terminated')).toBeTruthy();
      }));
    });

    describe('listGroupItemSummary directive', function() {

      it('should not compile the contents of the title element and add a class', inject(function($compile, $rootScope) {
        var element = $compile ('<div class="list-group-item-summary">{{1 + 2}}</div>')($rootScope);
        $rootScope.$digest();
        expect(element.text()).toEqual('{{1 + 2}}');
        expect(element.hasClass('ng-terminated')).toBeTruthy();
      }));
    });

  });

  describe('listGroup directive', function() {
    it('can compile a listGroup that contains items with code in the data-filter attribute', inject(function($compile, $rootScope) {
      expect(function() {
        var element = angular.element(
          '<ul class="list-group">' +
          '  <li class="list-group-item" data-filter="{{1 + 2}}"></li>' + 
          '</ul>'
        );
        element = $compile(element)($rootScope);
        expect(element.children().eq(0).attr('data-filter')).toEqual('{{1 + 2}}');
      }).not.toThrow();
    }));
  });

});