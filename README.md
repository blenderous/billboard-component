# BillBoard component

## Running the dev server

After cloning the repository, navigate to the directory which contains the project and run `npm install` and `run run dev`.

## Using the BillBoard component

- Set the `interval` prop to the interval at which the slides should switch.
- Place the elements which need to be shown in the slides, like `video`, `img` and `p`

Example:

```jsx
<BillBoard interval={2000}>
  <video
    autoPlay={true}
    muted={true}
    loop={true}
    width="400"
  >
    <source
      src="/videos/BigBuckBunnySample2.mp4"
      type="video/mp4"
    />
  </video>
  <img
    width="400"
    src="/images/fabien-bellanger-zKFoVBS_WGE-unsplash.jpg"
    alt="Sea view"
  />
  <p style={{ fontSize: "36px" }}>
    Some random text that appears in a slide of the carousal
  </p>
</BillBoard>
```
