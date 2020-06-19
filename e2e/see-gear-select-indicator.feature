Feature: see gear select indicator


  Scenario: see gear select indicator at survivors screen
    Given I am any
    And I am at "Survivors Screen"
    When I press "first item"
    Then I should see "first Item Selected Indicator"
