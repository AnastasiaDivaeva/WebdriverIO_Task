Feature:This function is responsible for testing the functionality of the demo application page

  Scenario Outline:Check that when you click on the "Get a consultation" button, a page with a demo request opens
    Given Guest open Home Page
    When Clicks on the section with tariffs
    And Click on the "Get a consultation" button
    Then A page with a demo request opens