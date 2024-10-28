# Scroll Position Retainer for Workday Jobs

## What it does:

This Chrome extension is designed to enhance your Workday Jobs experience. It prevents the page from automatically scrolling to the top when you click on a job listing. This ensures you can easily return to your previous position in the job list.

## How to use it:

1. Install the extension:

  - Download the manifest.json and content.js files from this repository.
  - Open Chrome and go to `chrome://extensions/`.
  - Enable "Developer mode" in the top right corner.
  - Click "Load unpacked".
  - Select the directory containing the downloaded files.

2. Use Workday Jobs as usual:
   The extension will work automatically in the background.

## How it works:

The extension uses JavaScript to intercept clicks on job listings. When a click is detected, it stores the current scroll position of the page. After the job details are loaded, the extension restores the original scroll position, allowing you to continue browsing the job list seamlessly.

## Known limitations:

The extension may not work as expected with custom Workday Jobs configurations or third-party scripts that interfere with its functionality.
If you experience any issues, please report them on the GitHub issue tracker.

## Contributing:

Contributions to this extension are welcome! If you find any bugs or have suggestions for improvement, please feel free to open an issue or submit a pull request on GitHub.

## License:

This extension is licensed under the MIT License.   

## Additional tips:

If you encounter any issues, try disabling other extensions that might be interfering.
For optimal performance, keep your browser and extension up to date.
By using this extension, you can save time and frustration when browsing Workday Jobs.
